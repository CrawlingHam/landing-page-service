const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <p className="text-base text-slate-500 dark:text-slate-400 text-center">© {currentYear} Flixburst. All rights reserved.</p>
        </div>
    );
};

export default Copyright;
