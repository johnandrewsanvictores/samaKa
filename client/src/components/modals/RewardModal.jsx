import { useState, useEffect } from "react";
import logo from "../../assets/SamaKa.png";

const RewardModal = ({ isOpen, onClose, onSave, initialData = {} }) => {
  const [form, setForm] = useState({
    title: "",
    points: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setForm({
        title: initialData.title || "",
        points: initialData.points || "",
        image: "", 
      });
      setImagePreview(initialData.image || "");
    }
  }, [initialData]);

  const isDisabled = !form.title || !form.points || (!form.image && !imagePreview);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        setForm((prev) => ({ ...prev, image: file }));
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClear = () => {
    setForm({ title: "", points: "", image: "" });
    setImagePreview("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) return;
    const payload = {
      ...form,
      imagePreview,
    };
    onSave?.(payload);
    handleClear();
    onClose();
  };

  if (!isOpen) return null;

  const isEdit = !!initialData && Object.keys(initialData).length > 0;

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
          <h2 className="text-headingText font-nunito font-bold text-xl mb-2">
            {isEdit ? "Edit Reward" : "Add Reward"}
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
              Lingkod Points:
            </label>
            <input
              type="number"
              name="points"
              value={form.points}
              onChange={handleChange}
              className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
       
          <div>
            <label className="block text-xs font-semibold text-headingText mb-1">
              Image:
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full bg-bgColor2 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
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

       
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={handleClear}
              className="bg-red text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red/90"
            >
              {isEdit ? "Reset" : "Clear"}
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

export default RewardModal; 