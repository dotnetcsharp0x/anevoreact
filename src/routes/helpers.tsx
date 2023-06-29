


export const pathsPublic: { [k: string]: string } = {
    home: '/',
    instruments: '/Instruments',
    blog: '/Blog',
    api: '/API',
    profile: '/Profile/:idOrSlug',
    detail: '/Detail',
    login: '/Login',
}

export const pathsPrivate: { [k: string]: string} = {
    accountSettings: '/',
}

export const enum Titles {
    Home="Home",
    Instruments="Instruments",
    Blog="Blog",
    API="API",
    Profile="Profile",
    Detail="Detail",
    Login="Login"
  }
  
  export const enum TitlesIndex {
    Home=0,
    Instruments=1,
    Blog=2,
    API=3
  }

export const paths: { [k:string]: string } = Object.assign({}, pathsPublic,pathsPrivate)

export const checkPathMatch = (
    pathname: string,
    paths: {[k:string]: string},
) => {
    let isMatch = false 

    const allPaths = Object.keys(paths).map((k) => paths[k])
    const pathFirstSection = pathname.split('/')[1]

    allPaths.forEach((p) => {
        if(p.slice(1)=== pathFirstSection) isMatch=true
    })
    return isMatch;
}