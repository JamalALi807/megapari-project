const ContactItem = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center w-full py-2">
      <span className="text-gray-800">{label}</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );
};

export default ContactItem;
