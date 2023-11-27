import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

export function CreatePriceCard({ plan, price, featureList }) {
  console.log(featureList);
  return (
    <div className="cardcontainer">
      <Card className="text-center">
        <Card.Header>{plan}</Card.Header>
        <Card.Body>
          <Card.Title><b>{price}</b></Card.Title>
          <hr></hr>
          <Card.Text>
            <ul className="fa-ul">
              {featureList.map((feature) => {
                return <li className={feature.isEnabled ? "" : "text-muted"}>               
                  <span className="fa-li">
                    <i class={`fa ${feature.isEnabled ? 'fa-check' : 'fa-times'}`}></i>       
                  </span>{feature.name}            
                </li>;
              })}
            </ul>
          </Card.Text>
          <Button variant="primary">Button</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreatePriceCard;