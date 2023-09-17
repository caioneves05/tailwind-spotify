type IProgressBar = {
    width: string,
    height: string,
    color: string
}

export const ProgressBar = ({ width, height, color }: IProgressBar) => {
    return(
        <div className={`h-${height} rounded-full w-${width} bg-zinc-600`}>
            <div className={`${color} w-20 h-1 rounded-full`}></div>
        </div>
    )
}