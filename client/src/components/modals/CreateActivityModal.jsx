import { useState } from "react";
import logo from "../../assets/SamaKa.png";
import api from "../../../axious.js";
import {showError, showSuccess} from "../../utils/alertHelper.js";

const CreateActivityModal = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    type: "",
    lp: "",
    eventImg: "",
  });
  const [imagePreview, setImagePreview] = useState("");

  const isDisabled = Object.values(form).some((v) => v === "");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        setForm((prev) => ({ ...prev, eventImg: file }));
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setForm((prev) => ({ ...prev, eventImg: "" }));
        setImagePreview("");
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClear = () => {
    setForm({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      type: "",
      lp: "",
      eventImg: "",
    });
    setImagePreview("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDisabled) return;
    try {
      console.log(form);
      const res = await api.post(
          "/event/create",
          (form),
          { withCredentials: true , headers: {'Content-Type': 'multipart/form-data' }}
      );

      const data = res.data;
      showSuccess("Event created!");
      handleClear();
      onClose();

    } catch (error) {
      showError(error.response.data.error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="h-10 w-10 mb-2" />
          <h2 className="text-center text-subHeadingText text-sm mb-4">
            In creating an event / activity, please input the field first.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-headingText mb-1">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
       
          <div>
            <label className="block text-xs font-semibold text-headingText mb-1">
              Description:
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              rows="3"
              required
            />
          </div>
 
          <div>
            <label className="block text-xs font-semibold text-headingText mb-1">
              Image:
            </label>
            <input
              type="file"
              name="eventImg"
              accept="image/*"
              onChange={handleChange}
              className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {imagePreview && (
              <div className="mt-2 flex justify-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-24 w-auto rounded-md object-cover border"
                />
              </div>
            )}
          </div>
    
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-headingText mb-1">
                Start Date:
              </label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-headingText mb-1">
                End Date:
              </label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>
       
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-headingText mb-1">
                Activity Type:
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select type</option>
                <option value="one-time">One Time</option>
                <option value="recurring">Recurring</option>
              </select>
              {form.activityType === "recurring" && (
                <div className="mt-2">
                  <label className="block text-xs font-semibold text-headingText mb-1">
                    Recurs every (days):
                  </label>
                  <input
                    type="number"
                    name="dayInterval"
                    min="1"
                    value={form.dayInterval || ""}
                    onChange={handleChange}
                    className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-headingText mb-1">
                Lingkod Points:
              </label>
              <input
                type="number"
                name="lp"
                value={form.lp}
                onChange={handleChange}
                className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

    
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={handleClear}
              className="bg-red text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red/90"
            >
              Clear
            </button>
            <button
              type="submit"
              disabled={isDisabled}
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 disabled:opacity-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateActivityModal; 