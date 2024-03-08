import React from 'react'

const Card = ({username="Devendra", url}) => {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" 
                src={url} 
                alt="Girl worried" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                <blockquote>
                <p className="text-lg font-medium">
                    Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.
                </p>
                </blockquote>
                <figcaption className="font-medium" >
                <div className="text-sky-500 dark:text-sky-400">
                    {username}
                </div>
                <div>
                    Staff Engineer, Algolia
                </div>
                </figcaption>
            </div>
            </figure>
    </div>
  )
}

export default Card