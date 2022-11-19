import React, { Component } from 'react';

function Support(){
	return (
		<div className='top10'>
		  <h1>Help</h1>
		</div>
	  );
	}

export default Support;


/*class Support extends Component {
  render() {
		return (
            <div>
                {
					data.Experiences.map((experience, i) => {
						return (
							<div key={i}>
								<div>
									<a href={experience.url}>
										<img src={experience.logo} alt={experience.companyName} />
									</a>
									<div>
										<div>
											<a href={experience.url}>{experience.companyName}</a>
										</div>
											{experience.roles.map(function (role, i) { 
												return <div key={i}>
													<h5>{role.title}</h5>
													<span>{role.startDate}</span>
													<span>{role.location}</span>
													<p>{role.description}</p>
												</div>
											})}
									</div>
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Support;*/
