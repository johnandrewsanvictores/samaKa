
import User from "../models/userModel.js";
import { promises as fsp } from 'fs';
import {fileExists, getCoverImgUploadFolder} from "../utils/helper.js";
import path from "path";
import Events from "../models/eventModel.js";
import Join from "../models/joinModel.js";

export const addEvents = async (req, res) => {
    try {
        const currentUser = req.user;
        console.log(req.file);
        const {eventImg, title, description, startDate, endDate, lp, type, dayInterval, category} = req.body;
        const coverFile = req.file.filename || null;

        if(currentUser.role !== "barangay"){
            const coverImgExist = await fileExists(getCoverImgUploadFolder("../uploads/eventCover"), coverFile);
            if(coverImgExist) await fsp.unlink(path.join(getCoverImgUploadFolder("../uploads/eventCover"), coverFile));
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const events = await Events.findOne({
            $or: [
                {title}
            ]
        })

        if (events) {
            const coverImgExist = await fileExists(getCoverImgUploadFolder("../uploads/eventCover"), coverFile);
            if(coverImgExist) await fsp.unlink(path.join(getCoverImgUploadFolder("../uploads/eventCover"), coverFile));
            return res.status(409).json({ error: "Event already exists" });
        }

        const event = await Events.create({barangayId: currentUser.barangayId, eventImg: coverFile, title, description, category, lp, type, dayInterval, startDate, endDate});

        res.status(201).json({
            event,
            success: "true",
            message: "Event created successfully"
        });
    } catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const updateEvents = async (req, res) => {
        try {
            const { _id, eventImg, ...updateFields } = req.body;
            const coverFile = req.file ? req.file.filename : eventImg;
            const updateReward = await Events.findByIdAndUpdate(
              _id,
               { $set: {...updateFields, eventImg: coverFile} },
               { new: true }
             );

            res.status(200).json({ success: true, reward: updateReward, message: "Updated event successfully" });
       } catch (error) {
           res.status(500).json({ success: false, message: error.message });
       }
 }

export const deleteEvents = async (req, res) => {
     try {
         const { id } = req.params;
         console.log(req.params.id);
         // const {coverImg} = await BookInfo.findById(id).select('coverImg -_id');
         const deletedEvent = await Events.findOneAndDelete({ _id: id});

         const uploadDir = getCoverImgUploadFolder("../uploads/eventCover");

         if(deletedEvent) {
             const coverImgExist = await fileExists(uploadDir, deletedEvent.eventImg);
             if(coverImgExist) await fsp.unlink(path.join(uploadDir, deletedEvent.eventImg));

             return res.status(200).json({ success: true, message: 'Event deleted' });
         }else {
             return res.status(404).json({ success: false, message: 'Event not found' });
         }
     }catch (err) {
         return  res.status(500).json({ error: err.message });
     }
 }

export const getEvents = async (req, res) => {
    try {
        const filters = req.query;
        const events = await Events.find(filters); // exclude password
        console.log(events);
        res.json({events: events});
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const getSpecificEvents = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Events.find({_id: id}); // exclude password
        res.json(event[0]);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const joinEvent = async (req, res) => {
    try{
        const {eventId} = req.body;
        const currentUser = req.user;

        const userInfo = await User.findById(currentUser._id);

        const isJoin = await Join.findOne({$and: [
                {eventId}, {userId: currentUser._id}
            ]})

        if(isJoin){
            return res.status(409).json({ error: "User already joined" });
        }

        const joinedInfo = await Join.create({userId:currentUser._id, fullName: userInfo.firstName + " " + userInfo.lastName ,  eventId, joinedAt: Date.now()})

        res.status(201).json({
            joinedInfo,
            success: "true",
            message: "User joined successfully"
        });
    } catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const acceptAttendance = async (req, res) => {
    try {
        const { eventId, userId } = req.body;
        const {lp} = await Events.findById(eventId, {"lp": 1});
        console.log(lp);

        await User.findByIdAndUpdate(userId, {$inc: {'lp' : lp}});
        const updateReward = await Join.findOneAndUpdate(
            {$and: [
                {eventId}, {userId}
            ]},
            { $set: {isPresent : true} },
            { new: true }
        );

        res.status(200).json({ success: true, reward: updateReward, message: "Updated joined status of user successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const rejectAttendance = async (req, res) => {
    try {
        const { eventId, userId } = req.body;
        const updateReward = await Join.findOneAndUpdate(
            {$and: [
                    {eventId}, {userId}
                ]},
            { $set: {isPresent : false} },
            { new: true }
        );

        res.status(200).json({ success: true, reward: updateReward, message: "Updated joined status of user successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getParticipantCount = async (req, res) => {
        console.log(req.body);
    try {
        const eventId = req.params.id;
        const pcount = await Join.countDocuments({eventId});
        console.log("Hello " + pcount)
        res.status(200).json({pcount});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getParticipants = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const participants = await Join.find({eventId});
        res.status(200).json({participants});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}