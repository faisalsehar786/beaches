import React, { Component } from 'react';

import { FaCocktail , FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

import Tittle from './Tittle.js';

export  default  class Services extends Component {

	state={
		services:[{

		icon :<FaCocktail/>,
		titlei:"free CockTail",
		info:"Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit"
	},
	{

		icon :<FaHiking/>,
		titlei:'free CockTail',
		info:'Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit'
	},
	{

		icon :<FaShuttleVan/>,
		titlei:'free CockTail',
		info:'Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit'
	},
	{

		icon :<FaBeer/>,
		titlei:'free CockTail',
		info:'Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit'
	}]
};
	render() {
		return (
<section className="services">
<Tittle title="services"/>

<div className="services-center">


{
this.state.services.map((item,index)=>{
return (
<article key={index} className="service">
<span>{item.icon}</span>
<h6>{item.titlei}</h6>
<p>{item.info}</p>
</article>);

})}




</div>

</section>
			
			
			
		);
	}
}


