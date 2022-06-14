export { default as Header } from "./Header";
export { default as Footer } from "./Footer";
export { default as Initial } from "./Initial";

//* Pagina de Formularios de Login e Cadastro e Compoenentes de Login e Cadastro
export { default as Login } from "./Login";
export { default as LoginForm } from "./LoginForm";
export { default as LoginCreate } from "./LoginCreate";
export { default as LoginPassLost } from "./LoginPassLost";
export { default as LoginPassReset } from "./LoginPassReset";

//* Usuario
export { default as User } from "./User";
export { default as UserHeader } from "./UserHeader";
export { default as UserHeaderNav } from "./UserHeaderNav";
export { default as UserPhotoPost } from "./UserPhotoPost";
export { default as UserStats } from "./UserStats";
export { default as UserStatsGraphs } from "./UserStatsGraphs";
export { default as UserProfile } from "./UserProfile";

//* Feed
export { default as Feed } from "./Feed";
export { default as FeedModal } from "./FeedModal";
export { default as FeedPhotos } from "./FeedPhotos";
export { default as FeedPhotosItem } from "./FeedPhotosItem";

//* COMPONENTES GLOBAIS
export { default as ButtonForm } from "./ButtonForm";
export { default as Input } from "./Input";
export { default as NotFound } from "./NotFound";

//* COMPONENTES DE RELACIONADOS AS PHOTOS
export { default as PhotoContent } from "./PhotoContent";
export { default as Photo } from "./Photo";
export { default as PhotoComments } from "./PhotoComments";
export { default as PhotoCommentsForm } from "./PhotoCommentsForm";
export { default as PhotoDelete } from "./PhotoDelete";

//* HELPERS
export { default as ErrorComponent } from "./Helper/Error";
export { default as ProtectedRouter } from "./Helper/ProtectedRouter";
export { default as Loading } from "./Helper/Loading";
export { default as ImageHelper } from "./Helper/ImageHelper";
export { default as Head } from "./Helper/Head";

//* API E METODOS DA API
export {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
  USER_POST,
  PHOTO_POST,
  PHOTOS_GET,
  PHOTO_GET,
  POST_COMMENTS,
  PHOTO_DELETE,
  USERPHOTOINFO_GET,
  PASSWORD_LOST,
  PASSWORD_RESET,
  STATS_GET,
} from "./API";

//* CONTEXTO GLOBAL
export { UserContext, ContextStorage } from "./ContextStorage";
