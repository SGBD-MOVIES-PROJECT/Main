import React, {Component} from 'react';
import './DisplayJson.css';

export default function DisplayJson({theadData, tbodyData}) {
	return (
	    <table>
			<thead>
			    <tr>
					{theadData.map(heading => {
						return <th key={heading}>{heading}</th>
					})}					
			    </tr>
		    </thead>
		    <tbody>
				{tbodyData.map((row, index) => {
					return <tr key={index}>
						{theadData.map((key, index) => {
							return <td key={row[key]}>{row[key]}</td>
						})}
					</tr>;
				})}
		    </tbody>
	    </table>
	);
  }
  









{/* <th>Title</th>
					<th>Description</th>
					<th>Genre</th>
					<th>Year</th>
					<th>Language</th>
					<th>Duration(min)</th>
					<th>Budget</th> */}


// class DisplayJson extends Component {
//   render() {
// 		return (
//             <div>
//                 {
// 					data.Experiences.map((experience, i) => {
// 						return (
// 							<div key={i}>
// 								<div>
// 									<a href={experience.url}>
// 										<img src={experience.logo} alt={experience.companyName} />
// 									</a>
// 									<div>
// 										<div>
// 											<a href={experience.url}>{experience.companyName}</a>
// 										</div>
// 											{experience.roles.map(function (role, i) { 
// 												return <div key={i}>
// 													<h5>{role.title}</h5>
// 													<span>{role.startDate}</span>
// 													<span>{role.location}</span>
// 													<p>{role.description}</p>
// 												</div>
// 											})}
// 									</div>
// 								</div>
// 							</div>
// 						);
// 					})
// 				}
//             </div>
//         );
//     }
// } 
// export {DisplayJson};