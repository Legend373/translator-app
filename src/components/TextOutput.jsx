export default function TextOutput({ value }) {
  return (
    <textarea
      className="w-full h-64 p-3 border rounded bg-gray-100"
      value={value}
      readOnly
    />
  );
}
