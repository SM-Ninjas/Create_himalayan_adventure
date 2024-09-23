import { teamData } from "@/components/about/ourTeam";
import { useRouter } from "next/router";

function TeamDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Find the team member based on the ID from the URL
  const teamMember = teamData.find(
    (member) => member.id === parseInt(id as string)
  );

  if (!teamMember) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-8 mt-20 max-w-4xl">
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <img
            src={teamMember.MemberImg}
            alt={teamMember.member_name}
            className="rounded-full shadow-lg w-[250px] h-[250px] object-cover border-4 border-primary"
          />
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            {teamMember.member_name}
          </h1>
          <h2 className="text-2xl font-semibold text-primary">
            {teamMember.Mem_position}
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-2xl">
            {teamMember.bio}
          </p>
        </div>
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md w-full space-y-4 text-center">
          <p className="text-lg font-medium text-gray-700">
            <span className="font-bold text-gray-900">Experience:</span>{" "}
            {teamMember.experience}
          </p>
          <p className="text-lg font-medium text-gray-700">
            <span className="font-bold text-gray-900">Email:</span>{" "}
            <a
              href={`mailto:${teamMember.email}`}
              className="text-primary hover:underline"
            >
              {teamMember.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;
