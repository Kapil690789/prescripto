import { createContext } from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = '₹'

    const calculateAge = (dob) => {
            const today = new Date()
            const birtDate = new Date(dob)

            let age = today.getFullYear() - birtDate.getFullYear()
            return age
    } 
    const months = ["","Jan","Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct", "Nov","Dec"]
  
   const slotDateFormat = (slotDate) => {
      const dateArray = slotDate.split('_')
      return dateArray[0]+ " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }
    const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };
    
    const value = {
        calculateAge,
        slotDateFormat,
        formatTime,
        currency
    }

    return (
        <AppContext.Provider  value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider