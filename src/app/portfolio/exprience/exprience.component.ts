import {Component, OnInit} from '@angular/core';
import {ResumeCardInfo} from "../../interfaces/profolio/resume-card-info";

@Component({
  selector: 'app-exprience',
  templateUrl: './exprience.component.html',
  styleUrls: ['./exprience.component.scss']
})
export class ExprienceComponent implements OnInit {

  resumeCardArray: ResumeCardInfo[] = [
    {
      _id: '1',
      startDate: '2017 ',
      endDate: 'Present',
      resumeDateColor: 'rgb(255, 101, 37)',
      resumeTitle: 'Honours Degree',
      resumeDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.'
    },
    {
      _id: '2',
      startDate: '2015',
      endDate: 'Present',
      resumeDateColor: 'rgb(73, 193, 108)',
      resumeTitle: 'Visual Designer',
      resumeDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.'
    },
    {
      _id: '3',
      startDate: '2012',
      endDate: '2015',
      resumeDateColor: 'rgb(255, 51, 102)',
      resumeTitle: 'Bachelor’s Degree',
      resumeDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.'
    },
    {
      _id: '4',
      startDate: '2012 ',
      endDate: '2014',
      resumeDateColor: 'rgb(51, 194, 219)',
      resumeTitle: 'UI & UX Designer',
      resumeDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.'
    },
    {
      _id: '5',
      startDate: '2007 ',
      endDate: '2010',
      resumeDateColor: 'rgb(88, 72, 180)',
      resumeTitle: 'Academic Degree',
      resumeDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.'
    },
    {
      _id: '6',
      startDate: '2009 ',
      endDate: '2012',
      resumeDateColor: 'rgb(255, 179, 0)',
      resumeTitle: 'WordPress Developer',
      resumeDescription: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent placerat ultrices metus sed luctus.'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
