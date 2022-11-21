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
            <Image src={avatar} className={styles.img} />
          </div>
          <div className={styles.nameContainer}>
            <div>Name*</div>
            <div className={styles.nameInputContainer}>
              <input placeholder="name" className={styles.nameInput} />
            </div>
          </div>
        </div>
        <div>
          <div>Location*</div>
          <div className={styles.nameInputContainer}>
            <input placeholder="location" className={styles.nameInput} />
          </div>
        </div>
        <div>
          <div>Degree*</div>
          <div className={styles.nameInputContainer}>
            <select className={styles.nameInput}>
              <option>Bachelor's</option>
              <option>Master's</option>
            </select>
          </div>
        </div>
        <div>
          <div>Description*</div>
          <textarea className={styles.descriptionTextarea} />
        </div>
        <div>
          <div>Resume*</div>
          <label>
            <Image src={file} />
            <input type="file" style={{ display: "none" }} />
          </label>
        </div>
      </div>
    </>
  );
};
export default Profile;
