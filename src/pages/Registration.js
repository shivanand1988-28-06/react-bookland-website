import React, { useState } from 'react';
import {Link} from 'react-router-dom';

//Components 
import PageTitle from './../layouts/PageTitle';

function Registration(){
    const [userType, setUserType] = useState('');

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    return(
        <>
            <div className="page-content">
                <PageTitle  parentPage="Shop" childPage="Registration" />               
                <section className="content-inner shop-account">
				
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <form onSubmit={(e) => e.preventDefault()}> 
                                        <h4 className="text-secondary">Registration</h4>
                                        <p className="font-weight-600">If you don't have an account with us, please Registration.</p>

                                        <div className="mb-4">
                                            <label className="label-title">Full Name *</label>
                                            <input name="dzFullName" required="" className="form-control" placeholder="Your Full Name" type="text" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Username *</label>
                                            <input name="dzUsername" required="" className="form-control" placeholder="Your Username" type="text" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Email address *</label>
                                            <input name="dzEmail" required="" className="form-control" placeholder="Your Email address" type="email" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Password *</label>
                                            <input name="dzPassword" required="" className="form-control " placeholder="Type Password" type="password" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="label-title">User Type *</label>
                                            <select name="dzUserType" required="" className="form-control" value={userType} onChange={handleUserTypeChange}>
                                                <option value="">Select User Type</option>
                                                <option value="banker">Banker</option>
                                                <option value="client">Client</option>
                                            </select>
                                        </div>

                                        {userType === 'client' && (
                                            <div className="mb-4">
                                                <label className="label-title">Mobile Number *</label>
                                                <input name="dzMobile" required="" className="form-control" placeholder="Your Mobile Number" type="tel" />
                                            </div>
                                        )}

                                        <div className="mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="dzNewsletter" id="newsletter" />
                                                <label className="form-check-label" htmlFor="newsletter">
                                                    Subscribe to our newsletter for book recommendations and updates
                                                </label>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <small>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to={"/privacy-policy"}>privacy policy</Link>.</small>
                                        </div>
                                        <div className="text-left">
                                            <button type="submit" className="btn btn-primary btnhover w-100 me-2">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </>
    )
}
export default Registration;