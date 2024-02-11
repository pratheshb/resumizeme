import './PersonalInformation.css'

export default function PersonalInformation() {

    return <form onSubmit={e => e.preventDefault()} className='personal-info-container'>
        <h4>Personal Information</h4>
        <div className='profile'>
            <div className="field-container fx-grow">
                <div className='field-row'>
                    <div className='field-group fx-grow'>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' value="Peter" id='fname' />
                    </div>
                    <div className='field-group fx-grow'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text' value="Cetera" id='lname' />
                    </div>
                </div>
                <div className='field-row'>
                    <div className='field-group fx-grow'>
                        <label htmlFor='city'>City</label>
                        <input type='text' value='London' id='city' />
                    </div>
                    <div className='field-group fx-grow'>
                        <label htmlFor='zip'>Postal Code</label>
                        <input type='text' value='E2 D4V' id='zip' />
                    </div>
                </div>
                <div className='field-row'>
                <div className='field-group fx-grow'>
                        <label htmlFor='address'>Address</label>
                        <input type='text' value='123 Example' id='address' />
                    </div>
                </div>
                <div className='field-row'>
                    <div className='field-group fx-grow'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' value='test@test.com' id='email' />
                    </div>
                    <div className='field-group fx-grow'>
                        <label htmlFor='phone'>Phone</label>
                        <input type='text' value='+563 3838 112' id='phone' />
                    </div>
                </div>
                <div className='field-row'>
                    <div className='field-group w-50 pd-rt'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='password' id='password' />
                    </div>
                </div>
                <p className=''>Use this email to login to your <a>resumedone.io</a> account and receive notifications</p>
            </div>
            <img src="/assets/images/profile2.png" alt="profile 2" height={144} width={144} />
        </div>
        <button className="btn-prm">
            Save
        </button>
    </form>
}