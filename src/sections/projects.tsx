import React from 'react'
import MotionDiv from '@/components/motion-div'
import Project from '../components/project'
import data from '../lib/constant'

export default function projects() {

    return (
        <section id="projects" className="flex w-full flex-col items-center text-center my-16">
            <MotionDiv>
                <h2 className="mb-4">Some of My Projects</h2> 
            </MotionDiv>
            <MotionDiv>
                <div>
                    {data.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}