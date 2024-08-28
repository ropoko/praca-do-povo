import Image from "next/image";

const candidates = [
  { id: 1, avatar: "/woman-1.png" },
  { id: 2, avatar: "/woman-2.png" },
  { id: 3, avatar: "/man-1.png" },
  { id: 4, avatar: "/man-2.png" },
  { id: 5, avatar: "/woman-1.png" },
  { id: 6, avatar: "/woman-2.png" },
  { id: 7, avatar: "/man-1.png" },
  { id: 8, avatar: "/man-2.png" },
];

export default function CandidateGrid() {
  const getCandidatePosition = (candidateId: number) => {
    const positions = {
      4: "col-start-2",
      7: "col-start-3",
    };

    return (
      positions[candidateId as keyof typeof positions] ||
      `col-start-${candidateId}`
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className={`${getCandidatePosition(
            candidate.id
          )} relative w-36 h-36 rounded-full overflow-hidden bg-gray-700`}
        >
          <Image
            src={candidate.avatar}
            alt={`Candidate ${candidate.id}`}
            objectFit="cover"
            width={145}
            height={145}
          />
        </div>
      ))}
    </div>
  );
}
