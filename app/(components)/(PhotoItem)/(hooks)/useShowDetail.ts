import { useState } from "react";

export const useShowDetail = () => {
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);

  return {
    showDetail: () => setIsShowDetail(true),
    closeDetail: () => setIsShowDetail(false),
    isShowDetail,
  };
};
