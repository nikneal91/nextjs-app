import {params} from ./../app/definition.tsx;

export default function ProjectDetails({params,
    }: {
        params: {projectId:string};
    }
) {
    return <h1>Details about project {params.projectId} here </h1>
}