import { FC } from "react";
import { LoadingIcon } from "../../shared/components/LoadingIcon";
import { useLabels } from "../hooks/useLabels";

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) return <LoadingIcon />; //! Por qué is Loading y no es isFetching

  return (
    <>
      {labelsQuery.data?.map((label) => (
        <div key={label.id}>
          <span
            className={`badge rounded-pill m-1 label-picker ${
              selectedLabels.includes(label.name) ? "label-active" : ""
            }`}
            style={{
              border: `1px solid #${label.color}`,
              color: `${label.color}`,
            }}
            onClick={() => onChange(label.name)}
          >
            {label.name}
          </span>
        </div>
      ))}
    </>
  );
};
