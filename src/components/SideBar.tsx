import { Button } from "./Button";
import { GenreResponseProps } from "../App";

import "../styles/sidebar.scss";

interface SideBarProps {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  const { genres, handleClickButton, selectedGenreId } = props;

  return (
    <nav className="sideabar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="button-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
