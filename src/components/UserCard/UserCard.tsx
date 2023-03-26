import numberTransform from "../../helpers/numberTransform";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./UserCard.module.scss";
import PhotoPlaceHolder from "../../images/photo-cover.svg";
import { User } from "../../helpers/crud-operations";

interface Props {
  details: User;
}

const UserCard: React.FC<Props> = ({ details }: Props) => {
  const { photo, name, position, email, phone, id } = details;

  const userId = id.toString();

  const isPhoto = photo !== "https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png";

  const phonePlusAdd = (phone: string) => (phone[0] === "+" ? phone : "+" + phone);

  return (
    <>
      <li className={styles.card_container}>
        <img src={isPhoto ? photo : PhotoPlaceHolder} alt={name} className={styles.user_photo} />
        <p className={styles.user_name}>{name}</p>
        <p className={styles.user_position}>{position}</p>
        <a className={styles.user_email_link} href={`mailto:${email}`}>
          <p className={styles.user_email} id={userId}>
            {email}
          </p>
        </a>
        <a className={styles.user_phone} href={`tel:${phonePlusAdd(phone)}`}>
          {numberTransform(phone)}
        </a>
      </li>
      <Tooltip anchorId={userId} place="bottom" content={email} className={styles.tooltip_styles} classNameArrow={styles.example_arrow} offset={0} />
    </>
  );
};

export default UserCard;
