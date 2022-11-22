import { Header } from "~components/Header";
import file from "~assets/icon-file-plus.svg";
import avatar from "~assets/Avatar.svg";
import Image from "next/image";
//import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import styles from "./styles.module.css";
const Profile = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.profileText}>Profile</div>
        <div className={styles.nameAndAvatar}>
          <div className={styles.imgContainer}>
            <Image src={avatar} className={styles.img} alt="avatar" />
          </div>
          <div className={styles.nameContainer}>
            <div>Name*</div>
            <div className={styles.nameInputContainer}>
              <input placeholder="Name" className={styles.nameInput} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "12px" }}>
          <div>Location*</div>
          <div className={styles.nameInputContainer}>
            <input placeholder="Location" className={styles.nameInput} />
          </div>
        </div>
        <div style={{ marginTop: "12px" }}>
          <div>Degree*</div>
          <div className={styles.nameInputContainer}>
            <select className={styles.nameInput}>
              <option>Bachelor&apos;s</option>
              <option>Master&apos;s</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: "12px" }}>
          <div>Description*</div>
          <textarea className={styles.descriptionTextarea} />
        </div>
        <div style={{ marginTop: "12px" }}>
          <div>Resume*</div>
          <label>
            <Image src={file} alt="resume" />
            <input type="file" style={{ display: "none" }} />
          </label>
        </div>
      </div>
      <div className={styles.saveButtonContainer}>
        <button className={styles.buttonsSave}>Save</button>
      </div>
    </>
  );
};
export default Profile;
