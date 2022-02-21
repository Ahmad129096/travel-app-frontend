import React from "react";
import "./index.css";
const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  // const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
  //       (result) => {
  //         console.log(result.text);
  //         Swal.fire({
  //           icon: "success",
  //           title: "Message Sent Successfully",
  //         });
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         Swal.fire({
  //           icon: "error",
  //           title: "Ooops, something went wrong",
  //           text: error.text,
  //         });
  //       }
  //     );
  //     e.target.reset();
  //   };
  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">main bazar</div>
              <div className="text-two">johar town 06</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">0317-4284732</div>
              <div className="text-two"></div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">hassanqaisar129096@gmail.com</div>
              <div className="text-two"></div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any query related to website or you want to report a
              user. you can send us a message
            </p>
            <form>
              <div className="input-box">
                <input
                  id="form-input-control-last-name"
                  type="text"
                  label="Name"
                  name="user_name"
                  placeholder="name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  id="form-input-control-email"
                  type="text"
                  label="Email"
                  name="user_email"
                  placeholder="email"
                  required
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  id="form-textarea-control-opinion"
                  label="Message"
                  name="user_message"
                  placeholder="Enter Your Message here"
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn btn1">
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
