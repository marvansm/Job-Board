import { useNavigate, useParams } from "@tanstack/react-router";
import DetailTemp from "../Templates/DetailTemp";
import { VacancyDetailRouter } from "../../Router/routes";
import { useEffect } from "react";

const Detail = () => {
  const { id } = useParams({ from: VacancyDetailRouter.id });
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate({ to: "/" });
    }
  }, [id, navigate]);

  return (
    <div>
      <DetailTemp />
    </div>
  );
};

export default Detail;
