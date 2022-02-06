import React ,{useState}from 'react';
import { Card,Alert,Button} from 'react-bootstrap';
import { logout } from '../firebase';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../firebase';

function Landing() {
  const [error,setError] = useState("");
  const[loading,setLoading] = useState(false);
  const currentUser = useAuth();
  const navigate = useNavigate();

  async function handleLogout(){
      setLoading(true);
      try{
          await logout();
          navigate('/');
      }
      catch{
          setError("Failed to log out");
      }
  }
  return(
      <>
          <div className="w-100" style={{maxWidth:"400px"}}>
          <div className="shadow">
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Profile</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <strong>Email: </strong>{currentUser?.email}
              </Card.Body>
          </Card>
          </div>
          <Button className="mt-2 w-100" type="submit" disabled={loading || !currentUser} onClick ={handleLogout}>Sign Out</Button>
         </div>
      </>
  )
}

export default Landing;
