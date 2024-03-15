import { DataTypes } from "../../../types/Data.types";

interface StatisticProps {
  title?: string;
  state: DataTypes[];
}

export const Statistics: React.FC<StatisticProps> = ({ title, state }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {state.map((el) => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
