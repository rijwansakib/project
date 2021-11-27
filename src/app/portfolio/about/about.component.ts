import { Component, OnInit } from '@angular/core';
import {FunFactsCardDetails} from "../../interfaces/profolio/fun-facts-card-details";
import {SkillsInfo} from "../../interfaces/profolio/skills-info";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  /*** fun-fact-card-data-dynamic */

  funFactCardArray: FunFactsCardDetails[]=[
    {
      _id:'1',
      cardIcon:'fa fa-gift',
      cardIconColor:'rgb(88, 72, 180)',
      totalProject:205,
      description:'Projects finished'
    },
    {
      _id:'2',
      cardIcon:'fa fa-smile',
      cardIconColor:'rgb(255, 101, 37)',
      totalProject:567,
      description:'Happy customers'
    },
    {
      _id:'3',
      cardIcon:'fa fa-gift',
      cardIconColor:'rgb(255, 51, 102)',
      totalProject:59,
      description:'Awards winner'
    },
  ]
  /*** skill details */
  skillDataArray:SkillsInfo[]=[
    {
      _id:"1",
      skillTopicName:"WordPress",
      skillParcent:"85%",
      skillEffectBg:"#FF93AF",
    },
    {
      _id:"2",
      skillTopicName:"PHP",
      skillParcent:"90%",
      skillEffectBg:"rgb(161, 146, 247)",
    },
    {
      _id:"3",
      skillTopicName:"HTML",
      skillParcent:"70%",
      skillEffectBg:"#FFAD8B",
    },
    {
      _id:"4",
      skillTopicName:"CSS",
      skillParcent:"80%",
      skillEffectBg:"rgb(134, 237, 255",
    },
    {
      _id:"5",
      skillTopicName:"Adobe XD",
      skillParcent:"95%",
      skillEffectBg:"#8CD4A1",
    }
    ,{
      _id:"1",
      skillTopicName:"jQuery",
      skillParcent:"65%",
      skillEffectBg:"#FFD164",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
