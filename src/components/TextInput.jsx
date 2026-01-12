export default function TextInput({ value, onChange }) {
  return (
    <textarea
      className="w-full h-64 p-3 border rounded"
      placeholder="Enter English text"
      value={value}
      onChange={onChange}
    />
  );
}
