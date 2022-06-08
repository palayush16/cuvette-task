
import React, {useState} from 'react';
import 'react-circular-progressbar/dist/styles.css';
import {Modal,Button, Form} from 'react-bootstrap'
import LineChart from 'react-linechart';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import './Dashboard.css'
import htmlLogo from "../assets/htmlLogo.png"
import trophy from "../assets/trophy.svg"
import trophy2 from "../assets/trophy2.png"
import trophy3 from "../assets/trophy3.png"
import target from "../assets/target.png"


var data2={
  "rank": "12890",
  "percentile": "37",
  "score":"07"
}


function MyVerticallyCenteredModal(props) {

  const initialFormData = Object.freeze({
    rank: "12890",
    percentile: "37",
    score:"07"
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

    
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    data2=formData;
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Update Scores 
        </Modal.Title>
        <img src={htmlLogo} alt="" />
      </Modal.Header>
      <Modal.Body style={{color:"#142683", fontWeight:"600"}}>
      <Form className="form-container">
            <Form.Group className="mb-3 d-flex justify-content-between " controlId="exampleForm.ControlInput1">
              <Form.Label><span>1</span>Update your rank</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                
               style={{width:"200px"}}
               name="rank"
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="exampleForm.ControlInput2">
              <Form.Label><span>2</span>Update your percentile</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                style={{width:"200px"}}
                name="percentile"
               
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-between" controlId="exampleForm.ControlInput2">
              <Form.Label><span>3</span>Update your current score(out of 15)</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                style={{width:"200px"}}
                name="score"
               
              />
            </Form.Group>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-outline-secondary" style={{height:"40px", width:"120px", backgroundColor:"white",color:"#142683"}} onClick={props.onHide}>Cancel</Button>
        <Button className="btn btn-outline-secondary" onClick={handleSubmit} style={{height:"40px", width:"120px", backgroundColor:"#142683",color:"white"}} type="submit">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Dashboard = () => {

  const data = [
    {									
        color: "#438AF6", 
        points: [{x: 0, y: 0}, {x: 20, y: 20}, {x: data2.percentile , y: 37}, {x: 60, y: 19}, {x: 80, y: 30}, {x: 100, y: 0}] 
    }
];

const [modalShow, setModalShow] = React.useState(false);


  return (
    <div className="dashboard-container">
      <div className="coloumn1">

        <div className="c1-test d-flex justify-content-between">
          <div className="html d-flex">
              <img src={htmlLogo} alt="" />
              <div className="html-text">
                
                <h3>Hypertext Markup Language</h3>
                <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
              </div> 
          </div>
          <button type="button" className="btn btn-outline-secondary" onClick={() => setModalShow(true)} style={{height:"40px", width:"120px", backgroundColor:"#142683",color:"white"}}>Update</button>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />

        <div className="c1-stat ">
          <h2 className="stat-heading">Quick Statistics</h2>
          <div className="stat-content ">
              <div className="section-metric">
                <img src={trophy}  alt="" />
                <div className="section-metric-text">
                  <h3>{data2.rank}</h3>
                  <p>YOUR RANK</p>
                </div>   
              </div>
        
              <div className="section-metric">
                <img src={trophy2}  alt="" />
                <div className="section-metric-text">
                  <h3>{data2.percentile}%</h3>
                  <p>PERCENTILE</p>
                </div>   
              </div>
         
              <div className="section-metric">
                <img src={trophy3}  alt="" />
                <div className="section-metric-text">
                  <h3>{data2.score}/ 15</h3>
                  <p>CORRECT ANSWERS</p>
                </div>   
              </div>
          
          </div>
        </div>


        <div className="c1-graph">
          <h3>Comparison Graph</h3>
          <div className="graph-content">
            <h4>You scored {data2.percentile}% percentile which is lower than the
average percentile 72% of all the engineers who took this assessment</h4>
            <img src={trophy2}  alt="" />
          </div>
          
          <LineChart 
              width={600}
              height={300}
              data={data}
              hideXLabel
              hideYLabel
              hideYAxis
              ticks={5}
              yMax={50}
             style={{color:"neutral dark"}}
          />
    
        </div>


      </div>






      <div className="coloumn2">
        <div className="c2-bar">
         <h3>Syllabus wise Analysis</h3>
         <div className="progress-container">
          <h4>HTML Tools, Forms, History</h4>
          <div className="container-bar">
            <div className="progress ">
              <div className="progress-bar" role="progressbar" ariaValuenow="0" style={{width: "80%",backgroundColor:"#438AF6"}} ariaValuemin="0" ariaValuemax="100"></div>
            </div>
              <h5 style={{color: "#438AF6"}}>80%</h5>
            </div>
          </div>
         

          <div className="progress-container">
          <h4>Tags & References in HTML</h4>
          <div className="container-bar">
            <div className="progress ">
              <div className="progress-bar" role="progressbar" ariaValuenow="0" style={{width: "60%",backgroundColor:"#FF9142"}} ariaValuemin="0" ariaValuemax="100"></div>
            </div>
              <h5 style={{color: "#FF9142"}}>60%</h5>
            </div>
          </div>

          <div className="progress-container">
          <h4>Tables & CSS Basics</h4>
          <div className="container-bar">
            <div className="progress ">
              <div className="progress-bar" role="progressbar" ariaValuenow="0" style={{width: "24%",backgroundColor:"#FB5E5E"}} ariaValuemin="0" ariaValuemax="100"></div>
            </div>
              <h5 style={{color: "#FB5E5E"}}>24%</h5>
            </div>
          </div>

          <div className="progress-container">
          <h4>Tables & CSS Basics</h4>
          <div className="container-bar">
            <div className="progress ">
              <div className="progress-bar" role="progressbar" ariaValuenow="0" style={{width: "96%",backgroundColor:"#2EC971"}} ariaValuemin="0" ariaValuemax="100"></div>
            </div>
              <h5 style={{color: "#2EC971"}}>96%</h5>
            </div>
          </div>
          
        </div>
        <div className="c2-pie">
          <div className="pie-header">
            <h3>Question Analysis</h3>
            <h5 style={{color: "#438AF6"}}>{data2.score}/15</h5>
          </div>
          <div className="pie-content">
              <h4>You scored 7 question correct out of 15. <span>However it
still needs some improvements</span></h4>
          </div>
          <div className="pie-graph" style={{ width:"100%" , height:"auto", padding:"5px 65px"}}>
           <CircularProgressbarWithChildren value={(data2.score*100)/15}  strokeWidth={16}>
              <img style={{ width: 40, marginTop: -5 }} src={target} alt="doge" />
           </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Dashboard