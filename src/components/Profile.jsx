import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone_no: '9869375455',
    linkedin: 'https://linkedin.com/in/johndoe',
    resume: 'https://example.com/resume.pdf',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation function for each field
  const validate = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(profile.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!/^\d{10}$/.test(profile.phone_no)) {
      newErrors.phone_no = 'Phone number must be exactly 10 digits';
    }

    if (!/^https?:\/\/.+/.test(profile.linkedin)) {
      newErrors.linkedin = 'Invalid LinkedIn URL';
    }

    if (!/^https?:\/\/.+/.test(profile.resume)) {
      newErrors.resume = 'Invalid Resume URL';
    }

    return newErrors; // Return any errors found
  };

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (isEditing) {
      if (name === 'name') {
        // Restrict to letters and spaces only for name
        const nameValue = value.replace(/[^a-zA-Z\s]/g, '');
        setProfile({ ...profile, [name]: nameValue });
      } else if (name === 'phone_no') {
        // Restrict to numbers only for phone number
        const phoneValue = value.replace(/[^0-9]/g, ''); 
        setProfile({ ...profile, [name]: phoneValue });
      } else {
        // For other fields like email, LinkedIn, and resume, no restriction needed
        setProfile({ ...profile, [name]: value });
      }
    }
  };

  // Save function that checks for errors
  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsEditing(false);
      setErrors({});
      console.log('Saved profile:', profile);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8" data-aos="fade-up" data-aos-duration="2000">
      <h1 className="text-3xl font-bold text-gray-400 mb-6">Candidate Profile</h1>
      <div className="bg-gray-200 shadow-md rounded-lg p-6 space-y-4">
        {['name', 'email', 'phone_no', 'linkedin', 'resume'].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 capitalize mb-1">{field}</label>
            <input
              type="text"
              name={field}
              value={profile[field]}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`w-full px-4 py-2 border ${
                errors[field] ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:ring-2 focus:ring-blue-500 ${
                !isEditing ? 'bg-gray-100 cursor-not-allowed' : ''
              }`}
            />
            {errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <div className="flex justify-end space-x-4 pt-4">
          <button
            onClick={() => setIsEditing(true)}
            disabled={isEditing}
            className={`px-4 py-2 rounded-md transition-colors ${
              isEditing
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            }`}
          >
            Edit
          </button>
          <button
            onClick={handleSave}
            disabled={!isEditing}
            className={`px-4 py-2 rounded-md transition-colors ${
              !isEditing
                ? 'bg-blue-200 text-white cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
