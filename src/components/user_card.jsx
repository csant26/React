import "./user_card.css";

const UserCard = () => {
  return (
    <>
      <div id="box1">
        <div id="header">
          <h1>Csant Shrestha</h1>
          <h3>@csant</h3>
        </div>
        <div>
          <div id="section1">
            <p>
              <strong>Email:</strong> shishant@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 123
            </p>
            <p>
              <strong>Website:</strong> shishant@stha.org
            </p>
          </div>

          <div id="section2">
            <p>
              <strong>Address:</strong>
              Tinkune-32, Subidhanagar
            </p>
          </div>
          <div id="company">
            <strong>Company:</strong>
            <p>ABC Company</p>
            <strong>Catchphrase:</strong>
            <p>"Bla bla bla"</p>
            <strong>Business:</strong>
            <p>Do business</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCard;
