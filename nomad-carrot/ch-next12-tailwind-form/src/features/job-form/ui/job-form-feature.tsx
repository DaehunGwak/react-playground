export default function JobFormFeature() {
  return (
    <div className="form-wrapper">
      <span className="form-title">Job Application Form</span>
      <form>
        <fieldset className="form-question">
          <legend className="form-description-text">What department do you want to work for?</legend>
          <div className="form-option-wrapper">
            <input type="radio" name="department" value="sales" id="departmentSales"/>
            <label htmlFor="departmentSales" className="form-option-text">Sales</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="department" value="marketing" id="departmentMarketing"/>
            <label htmlFor="departmentSales" className="form-option-text">Marketing</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="department" value="accounting" id="departmentAccounting"/>
            <label htmlFor="departmentSales" className="form-option-text">Accounting</label>
          </div>
          <div className="form-option-wrapper">
            <input type="radio" name="department" value="customer-service" id="departmentCustomerService"/>
            <label htmlFor="departmentSales" className="form-option-text">Customer Service</label>
          </div>
        </fieldset>
        <button type="submit" className="form-submit-button">Give me this job</button>
      </form>
    </div>
  );
}
