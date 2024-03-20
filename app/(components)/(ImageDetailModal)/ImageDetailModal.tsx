import { useDetailPhotos } from "@/app/(states)/(server)/DetailPhotos";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Props } from "./ImageDetailModal.types";
import styles from "./styles.module.css";

export const ImageDetailModal = ({ id, BookmarkBtn, ...props }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { data } = useDetailPhotos(id);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const propsForDialog = {
    ref: dialogRef,
    onClick: (evt: React.MouseEvent<HTMLDialogElement>) => {
      if (evt.target === evt.currentTarget) {
        evt.currentTarget.close();
      } /* close when clicked only from outside
          if the content is full in the dialog. */
    },
    ...props,
  };

  return (
    <dialog {...propsForDialog} className={styles["dialog"]}>
      {data && (
        <div className={styles["content-container"]}>
          <header>
            <div className={styles["header-col"]}>
              <form>
                <menu>
                  <button
                    value={undefined}
                    formMethod="dialog"
                    className={styles["button--close"]}
                  >
                    X
                  </button>
                </menu>
              </form>
              <p>{data.owner}</p>
            </div>
            <div className={styles["header-col"]}>
              <BookmarkBtn />
            </div>
          </header>
          <main>
            <section className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                src={data.url}
                alt={id}
                fill={true}
                unoptimized={true}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </section>
            <section className={styles["image-info"]}>
              <p>
                이미지 크기: {data.width} x {data.height}
              </p>
              <p>
                업로드 일자:{" "}
                {Math.floor(
                  (+new Date() - +new Date(data.created_at)) /
                    1000 /
                    60 /
                    60 /
                    24
                ).toLocaleString("ko-KR")}
                일 전
              </p>
              <p>다운로드 수: {data.download_cnt.toLocaleString("ko-KR")}</p>
              <p>키워드 태그: {data.keyword_tags.join(", ")}</p>
            </section>
          </main>
        </div>
      )}
    </dialog>
  );
};
