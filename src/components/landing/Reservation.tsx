// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const Reservation = () => {
//   return (
//     <div>
//         <section className="container mx-auto px-4 md:px-[60px] py-12 md:py-24">
//             <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
//                 <div className="relative w-full lg:w-1/2 flex justify-center">
//                     <img src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg relative z-20" />
//                     <div className="absolute inset-0 border-2 border-red-500 rounded-lg -translate-x-6 -translate-y-6 z-10" />
//                 </div>
//                 <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                
//                     <div className="flex flex-col items-start justify-center text-left px-4 md: py-10">
//                                 <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }} >
//                                     Reserve Your Table for an Authentic Sum Dim Sum Experience
//                                 </h1>

//                                 <p className="text-base md:text-lg max-w-4xl"  style={{ fontFamily: '"Raleway", sans-serif' }} >
//                                     Don’t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere.
//                                     Whether it’s a special occasion, a family gathering, or a cozy dinner for two, our handcrafted dishes
//                                     and impeccable service make every moment memorable. Reserve your table now and let us take you on a
//                                     culinary journey filled with tradition, passion, and the joy of exceptional food. Your unforgettable
//                                     dining experience awaits!
//                                 </p>
//                         </div>

//                     <div className="w-full max-w-xl">
//                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                             <div>
//                                 <input type="text" placeholder="Your Name" className="w-full p-3 border-b border-gray-300  focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"  />
//                             </div>
//                             <div className="relative">
//                                 <input type="text" placeholder="1 Person"  readOnly className="w-full p-3 border-b border-gray-300  pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer placeholder-gray-500" /> <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                             </div>
//                             <div className="relative">
//                                 <input type="text"  placeholder="21-12-2024" readOnly  className="w-full p-3 border-b border-gray-300  pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer placeholder-gray-500" />
                                
//                                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                             </div>
                            
//                             <div className="relative">
//                                 <input type="text" placeholder="9:00 PM" readOnly   className="w-full p-3 border-b border-gray-300  pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer placeholder-gray-500" />
                                
//                                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                             </div>
//                             </div>
//                             <div className="flex justify-center items-center">
//                                     <button className="w-1/2 items-center text-center bg-red-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-800 transition-colors duration-300 shadow-lg">
//                                     Book Now
//                                     </button>
//                             </div>
                            
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>

//   )
// }

// export default Reservation

// "use client"

// import React, { useState } from "react"
// import { format } from "date-fns"
// import { ChevronDown, CalendarIcon, Clock } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Calendar } from "@/components/ui/calendar"
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
// import { cn } from "@/lib/utils"

// const peopleOptions = ["1 Person", "2 People", "3 People", "4 People", "5+ People"]
// const timeOptions = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "9:00 PM"]

// const Reservation = () => {
//   const [selectedPeople, setSelectedPeople] = useState("")
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>()
//   const [selectedTime, setSelectedTime] = useState("")

//   return (
//     <div>
//       <section className="container mx-auto px-4 md:px-[60px] py-12 md:py-24">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
//           {/* Image Section */}
//           <div className="relative w-full lg:w-1/2 flex justify-center">
//             <img src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg relative z-20" />
//             <div className="absolute inset-0 border-2 border-red-500 rounded-lg -translate-x-6 -translate-y-6 z-10" />
//           </div>

//           {/* Text + Form Section */}
//           <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
//             <div className="flex flex-col items-start justify-center text-left px-4 md:py-10">
//               <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
//                 Reserve Your Table for an Authentic Sum Dim Sum Experience
//               </h1>
//               <p className="text-base md:text-lg max-w-4xl" style={{ fontFamily: '"Raleway", sans-serif' }}>
//                 Don’t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere.
//                 Whether it’s a special occasion, a family gathering, or a cozy dinner for two, our handcrafted dishes
//                 and impeccable service make every moment memorable. Reserve your table now and let us take you on a
//                 culinary journey filled with tradition, passion, and the joy of exceptional food. Your unforgettable
//                 dining experience awaits!
//               </p>
//             </div>

//             {/* Reservation Form */}
//             <div className="w-full max-w-xl mt-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 {/* Name Input */}
//                 <Input  className="rounded-none border-0 border-b border-gray-300 focus:ring-0 focus:border-black placeholder-gray-500" placeholder="Your Name" />

//                 {/* People Dropdown */}
//                 <Popover>
//                     <PopoverTrigger asChild>
//                     <Button
//                         variant="ghost"
//                         className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left placeholder-gray-500 focus:ring-0 focus:border-black"
//                     >
//                         {selectedPeople || "Select People"}
//                         <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
//                     </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0">
//                     <Command>
//                         <CommandInput placeholder="Search people..." />
//                         <CommandEmpty>No match.</CommandEmpty>
//                         <CommandGroup>
//                         {peopleOptions.map((option) => (
//                             <CommandItem key={option} onSelect={() => setSelectedPeople(option)}>
//                             {option}
//                             </CommandItem>
//                         ))}
//                         </CommandGroup>
//                     </Command>
//                     </PopoverContent>
//                 </Popover>

//                 {/* Date Picker */}
//                 <Popover>
//                     <PopoverTrigger asChild>
//                     <Button
//                         variant="ghost"
//                         className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left focus:ring-0 focus:border-black"
//                     >
//                         {selectedDate ? format(selectedDate, "PPP") : "Pick a Date"}
//                         <CalendarIcon className="ml-2 h-4 w-4 text-gray-400" />
//                     </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0">
//                     <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
//                     </PopoverContent>
//                 </Popover>

//                 {/* Time Dropdown */}
//                 <Popover>
//                     <PopoverTrigger asChild>
//                     <Button
//                         variant="ghost"
//                         className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left focus:ring-0 focus:border-black"
//                     >
//                         {selectedTime || "Select Time"}
//                         <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
//                     </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0">
//                     <Command>
//                         <CommandInput placeholder="Search time..." />
//                         <CommandEmpty>No match.</CommandEmpty>
//                         <CommandGroup>
//                         {timeOptions.map((option) => (
//                             <CommandItem key={option} onSelect={() => setSelectedTime(option)}>
//                             {option}
//                             </CommandItem>
//                         ))}
//                         </CommandGroup>
//                     </Command>
//                     </PopoverContent>
//                 </Popover>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center items-center">
//                 <Button className="w-1/2 bg-red-700 hover:bg-red-800 text-white text-base font-semibold shadow-lg">
//                   Book Now
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Reservation

// "use client"

// import React, { useState } from "react"
// import { format } from "date-fns"
// import { ChevronDown, CalendarIcon, Clock } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Calendar } from "@/components/ui/calendar"
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"

// const peopleOptions = ["1 Person", "2 People", "3 People", "4 People", "5+ People"]
// const timeOptions = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "9:00 PM"]

// const Reservation = () => {
//   const [name, setName] = useState("")
//   const [selectedPeople, setSelectedPeople] = useState("")
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>()
//   const [selectedTime, setSelectedTime] = useState("")
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async () => {
//     if (!name || !selectedPeople || !selectedDate || !selectedTime) {
//       alert("Please fill in all fields.")
//       return
//     }

//     const numberOfGuests = parseInt(selectedPeople)
//     const reservationDate = format(selectedDate, "yyyy-MM-dd")

//     const payload = {
//       name,
//       numberOfGuests: isNaN(numberOfGuests) ? 1 : numberOfGuests,
//       reservationDate,
//       reservationTime: selectedTime,
//     }

//     try {
//       setLoading(true)
//       const res = await fetch("https://landingpage-backend-fovb.onrender.com/api/v1/reservation", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       })

//       if (!res.ok) {
//         throw new Error("Failed to submit reservation")
//       }

//       alert("Reservation submitted successfully!")
//       // Reset form
//       setName("")
//       setSelectedPeople("")
//       setSelectedDate(undefined)
//       setSelectedTime("")
//     } catch (err) {
//       console.error(err)
//       alert("Something went wrong while submitting.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section className="container mx-auto px-4 md:px-[60px] py-12 md:py-24">
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
//         {/* Image */}
//         <div className="relative w-full lg:w-1/2 flex justify-center">
//           <img src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg relative z-20" />
//           <div className="absolute inset-0 border-2 border-red-500 rounded-lg -translate-x-6 -translate-y-6 z-10" />
//         </div>

//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
//           <div className="flex flex-col items-start justify-center text-left px-4 md:py-10">
//             <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
//               Reserve Your Table for an Authentic Sum Dim Sum Experience
//             </h1>
//             <p className="text-base md:text-lg max-w-4xl" style={{ fontFamily: '"Raleway", sans-serif' }}>
//               Don’t miss the chance to savor the finest flavors of authentic dim sum...
//             </p>
//           </div>

//           {/* Reservation Form */}
//           <div className="w-full max-w-xl mt-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {/* Name Input */}
//               <Input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your Name"
//                 className="rounded-none border-0 border-b border-gray-300 focus:ring-0 focus:border-black placeholder-gray-500"
//               />

//               {/* People Dropdown */}
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left focus:ring-0 focus:border-black"
//                   >
//                     {selectedPeople || "Select People"}
//                     <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-full p-0">
//                   <Command>
//                     <CommandInput placeholder="Search people..." />
//                     <CommandEmpty>No match.</CommandEmpty>
//                     <CommandGroup>
//                       {peopleOptions.map((option) => (
//                         <CommandItem
//                           key={option}
//                           onSelect={() => setSelectedPeople(option.split(" ")[0])}
//                         >
//                           {option}
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>

//               {/* Date Picker */}
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left focus:ring-0 focus:border-black"
//                   >
//                     {selectedDate ? format(selectedDate, "PPP") : "Pick a Date"}
//                     <CalendarIcon className="ml-2 h-4 w-4 text-gray-400" />
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0">
//                   <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
//                 </PopoverContent>
//               </Popover>

//               {/* Time Picker */}
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left focus:ring-0 focus:border-black"
//                   >
//                     {selectedTime || "Select Time"}
//                     <Clock className="ml-2 h-4 w-4 text-gray-400" />
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-full p-0">
//                   <Command>
//                     <CommandInput placeholder="Search time..." />
//                     <CommandEmpty>No match.</CommandEmpty>
//                     <CommandGroup>
//                       {timeOptions.map((time) => (
//                         <CommandItem key={time} onSelect={() => setSelectedTime(time)}>
//                           {time}
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center items-center">
//               <Button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="w-1/2 bg-red-700 hover:bg-red-800 text-white text-base font-semibold shadow-lg"
//               >
//                 {loading ? "Booking..." : "Book Now"}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Reservation


"use client"

import React, { useState } from "react"
import { format } from "date-fns"
import { ChevronDown, CalendarIcon, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"

const peopleOptions = ["1 Person", "2 People", "3 People", "4 People", "5+ People"]
const timeOptions = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "9:00 PM"]

const Reservation = () => {
  const [name, setName] = useState("")
  const [selectedPeople, setSelectedPeople] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState("")
  const [loading, setLoading] = useState(false)

  // Use state to manage the open state of the popovers
  const [isPeoplePopoverOpen, setIsPeoplePopoverOpen] = useState(false)
  const [isDatePopoverOpen, setIsDatePopoverOpen] = useState(false)
  const [isTimePopoverOpen, setIsTimePopoverOpen] = useState(false)

  const handleSubmit = async () => {
    // Basic validation check
    if (!name || !selectedPeople || !selectedDate || !selectedTime) {
      alert("Please fill in all fields.")
      return
    }

    // Fix: Extract the number from the selectedPeople string
    const peopleValue = selectedPeople.split(" ")[0]
    const numberOfGuests = parseInt(peopleValue)

    // Handle "5+" case by sending 5, as parseInt("5+") returns NaN
    const finalNumberOfGuests = isNaN(numberOfGuests) ? 5 : numberOfGuests

    // Format the date to match the YYYY-MM-DD format required by the API
    const reservationDate = format(selectedDate, "yyyy-MM-dd")

    const payload = {
      name,
      numberOfGuests: finalNumberOfGuests,
      reservationDate,
      reservationTime: selectedTime,
    }

    try {
      setLoading(true)
      const res = await fetch("https://landingpage-backend-fovb.onrender.com/api/v1/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error(`Failed to submit reservation with status: ${res.status}`)
      }

      alert("Reservation submitted successfully!")
      // Reset form
      setName("")
      setSelectedPeople("")
      setSelectedDate(undefined)
      setSelectedTime("")
    } catch (err) {
      console.error("Submission error:", err)
      alert("Something went wrong while submitting. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container mx-auto px-4 md:px-[60px] py-12 md:py-24">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg relative z-20" />
          <div className="absolute inset-0 border-2 border-red-500 rounded-lg -translate-x-6 -translate-y-6 z-10" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-start justify-center text-left px-4 md:py-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
              Reserve Your Table for an Authentic Sum Dim Sum Experience
            </h1>
            <p className="text-base md:text-lg max-w-4xl" style={{ fontFamily: '"Raleway", sans-serif' }}>
              Don’t miss the chance to savor the finest flavors of authentic dim sum...
            </p>
          </div>

          {/* Reservation Form */}
          <div className="w-full max-w-xl mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Input */}
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="rounded-none border-0 border-b border-gray-300 focus:ring-0 focus:border-black placeholder-gray-500"
              />

              {/* People Dropdown */}
              <Popover open={isPeoplePopoverOpen} onOpenChange={setIsPeoplePopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left focus:ring-0 focus:border-black"
                  >
                    {selectedPeople || "Select People"}
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search people..." />
                    <CommandEmpty>No match.</CommandEmpty>
                    <CommandGroup>
                      {peopleOptions.map((option) => (
                        <CommandItem
                          key={option}
                          onSelect={() => {
                            setSelectedPeople(option)
                            setIsPeoplePopoverOpen(false)
                          }}
                        >
                          {option}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              {/* Date Picker */}
              <Popover open={isDatePopoverOpen} onOpenChange={setIsDatePopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left focus:ring-0 focus:border-black"
                  >
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a Date"}
                    <CalendarIcon className="ml-2 h-4 w-4 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date)
                      setIsDatePopoverOpen(false)
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              {/* Time Picker */}
              <Popover open={isTimePopoverOpen} onOpenChange={setIsTimePopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between rounded-none border-0 border-b border-gray-300 text-left focus:ring-0 focus:border-black"
                  >
                    {selectedTime || "Select Time"}
                    <Clock className="ml-2 h-4 w-4 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search time..." />
                    <CommandEmpty>No match.</CommandEmpty>
                    <CommandGroup>
                      {timeOptions.map((time) => (
                        <CommandItem
                          key={time}
                          onSelect={() => {
                            setSelectedTime(time)
                            setIsTimePopoverOpen(false)
                          }}
                        >
                          {time}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-1/2 bg-red-700 hover:bg-red-800 text-white text-base font-semibold shadow-lg"
              >
                {loading ? "Booking..." : "Book Now"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation