import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateForm';

const JobApplicationForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);
  const [position, setPosition] = useState('');

  function submit() {
    alert(`Form submitted successfully!\n${JSON.stringify(values, null, 2)}`);
  }

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={values.fullName || ''}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email || ''}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={values.phone || ''}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="position">Applying for Position</label>
          <select
            name="position"
            id="position"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
              handleChange(e);
            }}
          >
            <option value="">Select a position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.position && <p className="error">{errors.position}</p>}
        </div>
        {(position === 'Developer' || position === 'Designer') && (
          <div>
            <label htmlFor="experience">Relevant Experience (Years)</label>
            <input
              type="number"
              name="experience"
              id="experience"
              value={values.experience || ''}
              onChange={handleChange}
            />
            {errors.experience && <p className="error">{errors.experience}</p>}
          </div>
        )}
        {position === 'Designer' && (
          <div>
            <label htmlFor="portfolio">Portfolio URL</label>
            <input
              type="text"
              name="portfolio"
              id="portfolio"
              value={values.portfolio || ''}
              onChange={handleChange}
            />
            {errors.portfolio && <p className="error">{errors.portfolio}</p>}
          </div>
        )}
        {position === 'Manager' && (
          <div>
            <label htmlFor="managementExperience">Management Experience</label>
            <input
              type="text"
              name="managementExperience"
              id="managementExperience"
              value={values.managementExperience || ''}
              onChange={handleChange}
            />
            {errors.managementExperience && <p className="error">{errors.managementExperience}</p>}
          </div>
        )}
        <div>
          <label>Additional Skills</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="JavaScript"
                onChange={handleChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="CSS"
                onChange={handleChange}
              />
              CSS
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="Python"
                onChange={handleChange}
              />
              Python
            </label>
            {errors.skills && <p className="error">{errors.skills}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="preferredInterviewTime">Preferred Interview Time</label>
          <input
            type="date"
            name="interviewDate"
            id="interviewDate"
            value={values.interviewDate || ''}
            onChange={handleChange}
          />
          <input
            type="time"
            name="interviewTime"
            id="interviewTime"
            value={values.interviewTime || ''}
            onChange={handleChange}
          />
          {errors.interviewDate && <p className="error">{errors.interviewDate}</p>}
          {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
