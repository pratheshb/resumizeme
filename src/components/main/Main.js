import './Main.css'
import Banner from '../banner/Banner'
import PersonalInformation from '../personalInformation/PersonalInformation'
import DeleteAccount from '../deleteAccount/DeleteAccount'
export default function Main() {

    return <main>
        <Banner />
        <PersonalInformation />
        <DeleteAccount />
    </main>
}