import CustomButton from '../atoms/CustomButton';

function ProjectCard({image, title, description, technologies, link}) {
    return (
        <div className='card h-100'>
            <img
                src={image}
                className='card-img-top'
                alt={'Vista previa del proyecto'}
            />

            <div className='card-body d-flex flex-column'>
                <h3 className='card-title'>
                    {title}
                </h3>

                <p className='card-text'>
                    {description}
                </p>

                <p>
                    <strong>Tecnologías:</strong> {technologies}
                </p>

                <div className='mt-auto'>
                    <CustomButton 
                        text="Ver Proyecto"
                        href={link}
                    />
                </div>

            </div>
        </div>
    )
}

export default ProjectCard;