import '../pages/HomePage/style.css';

export const GetMonth = ({ month, year }) => {
  const months = [
    'Leden',
    'Únor',
    'Březen',
    'Duben',
    'Květen',
    'Červen',
    'Červenec',
    'Srpen',
    'Září',
    'Říjen',
    'Listopad',
    'Prosinec',
  ];

  return (
    <p className="current-date">
      {months[month]} {year}
    </p>
  );
};
