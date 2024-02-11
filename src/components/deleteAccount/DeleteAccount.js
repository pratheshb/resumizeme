import './DeleteAccount.css'


export default function DeleteAccount() {

    return <>
        <div className="user-conf-container">
            <input type='checkbox'></input>
            <p>Show my profile to serious employers on <a>hirethesbest.io</a> for free</p>
        </div>
        <section className="delete-account">
            <h5>Delete account</h5>
            <p>If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</p>
            <button className='warn-btn'>
                Yes, Delete my account
            </button>
        </section>
    </>
}