export function RepoOverview({ orgName, avatar_url, url }) {
  return (
    <>
      <h1>
        List of <a href={url}>{orgName}</a> repositories
      </h1>
      {avatar_url && (
        <img
          width="100"
          src={avatar_url}
          alt={`Avatar for ${{ orgName }}`}
          aria-hidden={true}
        />
      )}
    </>
  );
}
