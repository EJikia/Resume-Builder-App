import ResumePage from "../ResumePage/ResumePage";
import "./ProfilePage.scss";
import Wrapper from "../../components/UI/Wrapper";
import Header from "../../components/UI/Header";
import Input from "../../components/UI/Input";
import Textarea from "../../components/UI/Textarea";
import Button from "../../components/UI/Button";

const ProfilePage = (props) => {
  return (
    <Wrapper>
      <Header page="1" title="პირადი ინფო" />
      <form></form>
      <div id="firstName_input">
        <Input
          type="text"
          inputClassName="short-input"
          labelClassName="short-input-label"
          hintClassName="shortWidthHint"
          label="სახელი"
          text="მინიმუმ 2 ასო, ქართული ასოები"
        />
      </div>
      <div id="lastName_input">
        <Input
          type="text"
          inputClassName="short-input"
          labelClassName="short-input-label"
          hintClassName="shortWidthHint"
          label="გვარი"
          text="მინიმუმ 2 ასო, ქართული ასოები"
        />
      </div>
      <Input
        type="file"
        inputClassName="file-input"
        labelClassName="file-input-label"
        label="პირადი ფოტოს ატვირთვა"
        accept="image/png, image/jpeg"
      />
      <button id="upload_img">ატვირთვა</button>
      <div id="aboutme_wrapper">
        <Textarea
          inputClassName="textarea"
          labelClassName="textarea-label"
          label="ჩემ შესახებ (არასავალდებულო)"></Textarea>
      </div>
      <div id="email_input">
        <Input
          type="text"
          inputClassName="long-input"
          labelClassName="long-input-label"
          hintClassName="longWidthHint"
          label="ელ.ფოსტა"
          text="უნდა მთავრდებოდეს @redberry.ge-ით"
        />
      </div>
      <div id="mobile_input">
        <Input
          type="text"
          inputClassName="long-input"
          labelClassName="long-input-label"
          hintClassName="longWidthHint"
          label="მობილურის ნომერი"
          text="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
        />
      </div>
      <Button className="btn" text="შემდეგი"/>

      <ResumePage />
    </Wrapper>
  );
};

export default ProfilePage;
