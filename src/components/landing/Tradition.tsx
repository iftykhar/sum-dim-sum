import React from 'react';
import Image from "next/image";
import {  Card,  CardAction,  CardContent,  CardDescription,  CardFooter,  CardHeader,  CardTitle,} from "@/components/ui/card";

const Tradition = () => {
  return (
    <div>
        <section className='container mx-auto px-[60px]'>
            <div className="p-20">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
                        Taste the Tradition
                    </h1>
                    <img src="/objects.png" alt="logo" />
                </div>
                <div className="mt-15">
                    <div className="w-full flex gap-2">
                        <div className="w-3/5">
                                <Card >
                                    {/* <CardHeader>
                                        <CardTitle>Card Title</CardTitle>
                                        <CardDescription>Card Description</CardDescription>
                                        
                                    </CardHeader>
                                    <CardContent>
                                        <p>Card Content</p>
                                    </CardContent> */}
                                    <img src="/" alt="" />
                                    <CardFooter>
                                        
                                    </CardFooter>
                                </Card>
                        </div>
                        <div className="w-2/5">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Card Title</CardTitle>
                                        <CardDescription>Card Description</CardDescription>
                                        
                                    </CardHeader>
                                    <CardContent>
                                        <p>Card Content</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Card Footer</p>
                                    </CardFooter>
                                </Card>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default Tradition
