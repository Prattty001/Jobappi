const validateForm = (values) => {
    let errors = {};
  
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.phone) {
      errors.phone = 'Phone Number is required';
    } else if (isNaN(values.phone) || values.phone <= 0) {
      errors.phone = 'Phone Number must be a valid number';
    }
  
    if (!values.position) {
      errors.position = 'Position is required';
    }
  
    if ((values.position === 'Developer' || values.position === 'Designer') && (!values.experience || values.experience <= 0)) {
      errors.experience = 'Relevant Experience is required and must be greater than 0';
    }
  
    if (values.position === 'Designer' && !values.portfolio) {
      errors.portfolio = 'Portfolio URL is required';
    } else if (values.portfolio && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolio)) {
      errors.portfolio = 'Portfolio URL is invalid';
    }
  
    if (values.position === 'Manager' && !values.managementExperience) {
      errors.managementExperience = 'Management Experience is required';
    }
  
    if (!values.skills || values.skills.length === 0) {
      errors.skills = 'At least one skill must be selected';
    }
  
    if (!values.interviewDate) {
      errors.interviewDate = 'Preferred Interview Date is required';
    }
  
    if (!values.interviewTime) {
      errors.interviewTime = 'Preferred Interview Time is required';
    }
  
    return errors;
  };
  
  export default validateForm;
  