class DashboardPage{
    constructor(page){
        this.page=page;
        this.pimMenuItem='text=PIM';
        this.adminMenuItem='text=Admin';
        this.leaveMenuItem='text=Leave';
    }
    async clickPIM(){
        await this.page.click(this.pimMenuItem);
    }
}
module.exports={DashboardPage};