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

//   const [isPeoplePopoverOpen, setIsPeoplePopoverOpen] = useState(false)
//   const [isDatePopoverOpen, setIsDatePopoverOpen] = useState(false)
//   const [isTimePopoverOpen, setIsTimePopoverOpen] = useState(false)

//   const handleSubmit = async () => {
//     if (!name || !selectedPeople || !selectedDate || !selectedTime) {
//       alert("Please fill in all fields.")
//       return
//     }

//     const peopleValue = selectedPeople.split(" ")[0]
//     const numberOfGuests = parseInt(peopleValue)

//     const finalNumberOfGuests = isNaN(numberOfGuests) ? 5 : numberOfGuests

//     const reservationDate = format(selectedDate, "yyyy-MM-dd")

//     const payload = {
//       name,
//       numberOfGuests: finalNumberOfGuests,
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
//         throw new Error(`Failed to submit reservation with status: ${res.status}`)
//       }

//       alert("Reservation submitted successfully!")

//       setName("")
//       setSelectedPeople("")
//       setSelectedDate(undefined)
//       setSelectedTime("")
//     } catch (err) {
//       console.error("Submission error:", err)
//       alert("Something went wrong while submitting. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section className="container mx-auto px-4 md:px-[60px] py-12 md:py-24">
//       {/* Mobile: stack children, Tablet/Desktop: side-by-side */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-12">
//         {/* The image div */}
//         <div className="relative w-full md:w-1/2 flex justify-center">
//           <img src="/Rectangle401.png" alt="Sum Dim Sum storefront" className="w-full h-auto rounded-lg relative z-20" />
//           <div className="absolute inset-0 border-2 border-red-500 rounded-lg -translate-x-6 -translate-y-6 z-10" />
//         </div>

//         {/* The form div */}
//         <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
//           <div className="flex flex-col items-start justify-center text-left px-4 md:py-10">
//             {/* Adjusted header font size for mobile and tablet */}
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
//               Reserve Your Table for an Authentic Sum Dim Sum Experience
//             </h1>
//             {/* Adjusted paragraph font size for mobile and tablet */}
//             <p className="text-sm md:text-base lg:text-lg max-w-4xl" style={{ fontFamily: '"Raleway", sans-serif' }}>
//               Don’t miss the chance to savor the finest flavors of authentic dim sum...
//             </p>
//           </div>

//           <div className="w-full max-w-xl mt-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {/* All form components remain the same */}
//               <Input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your Name"
//                 className="rounded-none border-0 border-b border-gray-300 focus:ring-0 focus:border-black placeholder-gray-500"
//               />

//               <Popover open={isPeoplePopoverOpen} onOpenChange={setIsPeoplePopoverOpen}>
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
//                           onSelect={() => {
//                             setSelectedPeople(option)
//                             setIsPeoplePopoverOpen(false)
//                           }}
//                         >
//                           {option}
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>

//               <Popover open={isDatePopoverOpen} onOpenChange={setIsDatePopoverOpen}>
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
//                   <Calendar
//                     mode="single"
//                     selected={selectedDate}
//                     onSelect={(date) => {
//                       setSelectedDate(date)
//                       setIsDatePopoverOpen(false)
//                     }}
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>

//               <Popover open={isTimePopoverOpen} onOpenChange={setIsTimePopoverOpen}>
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
//                         <CommandItem
//                           key={time}
//                           onSelect={() => {
//                             setSelectedTime(time)
//                             setIsTimePopoverOpen(false)
//                           }}
//                         >
//                           {time}
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </Command>
//                 </PopoverContent>
//               </Popover>
//             </div>

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
import Image from "next/image"

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

  const [isPeoplePopoverOpen, setIsPeoplePopoverOpen] = useState(false)
  const [isDatePopoverOpen, setIsDatePopoverOpen] = useState(false)
  const [isTimePopoverOpen, setIsTimePopoverOpen] = useState(false)

  const handleSubmit = async () => {
    if (!name || !selectedPeople || !selectedDate || !selectedTime) {
      alert("Please fill in all fields.")
      return
    }

    const peopleValue = selectedPeople.split(" ")[0]
    const numberOfGuests = parseInt(peopleValue)

    const finalNumberOfGuests = isNaN(numberOfGuests) ? 5 : numberOfGuests

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
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src="/Rectangle401.png"
            alt="Sum Dim Sum storefront"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg relative z-20"
          />
          <div className="absolute inset-0 border-2 border-red-500 rounded-lg -translate-x-6 -translate-y-6 z-10" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex flex-col items-start justify-center text-left px-4 md:py-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
              Reserve Your Table for an Authentic Sum Dim Sum Experience
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-4xl" style={{ fontFamily: '"Raleway", sans-serif' }}>
              Don’t miss the chance to savor the finest flavors of authentic dim sum...
            </p>
          </div>

          <div className="w-full max-w-xl mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="rounded-none border-0 border-b border-gray-300 focus:ring-0 focus:border-black placeholder-gray-500"
              />

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