import styles from "./PositionSelect.module.scss";

// selectedValue

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected: string;
}

const PositionSelect: React.FC<Props> = ({ onChange, selected }: Props) => {
  const isChecked = (value: string) => value === selected;

  return (
    <label htmlFor="position" className={styles.position_choice}>
      <h3 className={styles.position_heading}>Select your position</h3>
      <div className={styles.position_container}>
        <input type="radio" id="front" name="position" value={1} checked={isChecked("1")} onChange={onChange} />
        <label htmlFor="front">Lawyer</label>
      </div>
      <div className={styles.position_container}>
        <input type="radio" id="back" name="position" value={2} checked={isChecked("2")} onChange={onChange} />
        <label htmlFor="back">Content manager</label>
      </div>
      <div className={styles.position_container}>
        <input type="radio" id="designer" name="position" value={3} checked={isChecked("3")} onChange={onChange} />
        <label htmlFor="designer">Security</label>
      </div>
      <div className={styles.position_container}>
        <input type="radio" id="qa" name="position" value={4} checked={isChecked("4")} onChange={onChange} />
        <label htmlFor="qa">Designer</label>
      </div>
    </label>
  );
};

export default PositionSelect;
