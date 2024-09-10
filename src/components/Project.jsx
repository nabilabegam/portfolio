import websiteImg1 from '../assets/e-commerce-website.avif';
import websiteImg2 from '../assets/restaurant.avif';
import websiteImg3 from '../assets/todo.avif';

const Projects = () => {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with Bootstrap,CSS, HTML.',
                link: 'https://github.com/nabilabegam/Home-accessories'
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce website like Swiggy, Built with React & Bootstrap',
                link: 'https://github.com/nabilabegam/Shadow-Restaurent'
            },
            {
                image: websiteImg3,
                description: 'Basic Product List  & To-Do List, Built with JS,CSS and Bootstrap',
                link: 'https://github.com/nabilabegam/Form-to-do-and-product-tables'
            }
        ]
    }

    return (<section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, Bootstrap, JS and  CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>)
}
export default Projects