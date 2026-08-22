// Configuration de publication vers GitHub.
// 1. Mets ce dossier sur GitHub Pages.
// 2. Remplace owner/repo/branch/path par les infos de ton repo.
// 3. Dans l'app, clique "Publier sur le lien partage" et colle un token GitHub
//    avec le droit "Contents: Read and write" sur ce repo.
//
// Important: le token n'est pas ecrit dans ce fichier. Il reste seulement dans
// le navigateur de ton appareil, en localStorage.
window.CARRIERE_SYNC = {
  provider: "github",
  owner: "",
  repo: "",
  branch: "main",
  path: "data.json"
};
